import { useState } from 'react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import TodoService from '../../services/todo.service';
import ToastService from '../../services/toast.service';
import { todoCreateDefaultErrorMsg, todoCreateSuccessMsg } from '../../messages/todo.message';

export default function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startAt, setStartAt] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await TodoService.createTodo({ title, description, start_at: startAt });
      ToastService.success(todoCreateSuccessMsg);
    } catch (error) {
      ToastService.error(todoCreateDefaultErrorMsg);
    } finally {
      resetForm();
    }
  }

  function resetForm() {
    setTitle('');
    setDescription('');
    setStartAt('');
  }

  return (
    <div className="m-auto w-1/2">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          rows={8}
          placeholder="Enter todo description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Enter todo title"
          value={startAt}
          onChange={(e) => setStartAt(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <Button type="submit">Create</Button>
          <Button type="button" variant="secondary" onClick={resetForm}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}
