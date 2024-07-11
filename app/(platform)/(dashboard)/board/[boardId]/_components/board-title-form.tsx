'use client';

import { toast } from 'sonner';
import { ElementRef, useRef, useState } from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/form/form-input';
import { updateBoard } from '@/actions/update-board';
import { useAction } from '@/hooks/use-action';

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title}" updated`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(data.title);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const onSubmit = (formData: FormData) => {
    const newTitle = formData.get('title') as string;

    if (title === newTitle) {
      return disableEditing();
    }

    execute({ title: newTitle, id: data.id });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        className='flex items-center gap-x-2'
        ref={formRef}
        action={onSubmit}
      >
        <FormInput
          id='title'
          onBlur={onBlur}
          defaultValue={title}
          className='text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:ooutline-none focus-visible:ring-transparent border-none'
          ref={inputRef}
        />
      </form>
    );
  }

  return (
    <Button
      variant='transparent'
      className='font-bold text-lg h-auto w-auto p-1 px-2'
      onClick={enableEditing}
    >
      {title}
    </Button>
  );
};
