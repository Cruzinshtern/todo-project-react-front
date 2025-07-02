import { useEffect, useState } from 'react';
import { useGetTodosQuery } from '../store/todosApi';
import type { DisplayType, Tab } from '../interfaces/todo.interface';
import { useSearchParams } from 'react-router-dom';
import TabPanel from '../features/TabPanel';
import { TODO_DISPLAY_TABS } from '../constants/constants';
import TodoTiles from '../features/todo/TodoTiles';
import TodoTable from '../features/todo/TodoTable';

const defaultDisplayType: DisplayType = 'tiles';

export default function TodoListPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [displayType, setDisplayType] = useState(defaultDisplayType);
  const [searchParams, setSearchParams] = useSearchParams();

  const displayTypeArr: Tab[] = TODO_DISPLAY_TABS;

  const { data, error, isLoading, isFetching } = useGetTodosQuery({ page, limit });

  useEffect(() => {
    // console.log('Массив тудушек (todos):', data?.data);

    if (data?.data?.length === 0 && !isLoading && !isFetching) {
      console.log('Список тудушек пуст.');
    }

    if (error) {
      console.error('Произошла ошибка при загрузке тудушек:', error);
    }
  }, [data, error, isLoading, isFetching]);

  useEffect(() => {
    searchParams.set('view', displayType);
    setSearchParams(searchParams, { replace: true });
  }, [displayType, searchParams, setSearchParams]);

  const todos = data?.data;

  return (
    <>
      <TabPanel
        tabs={displayTypeArr}
        activeTab={displayType}
        onTabChange={(key) => setDisplayType(key as DisplayType)}
        label="Display type"
      />
      <div className="p-4">
        {displayType === 'tiles' && <TodoTiles todos={todos} />}
        {displayType === 'table' && <TodoTable todos={todos} />}
      </div>
    </>
  );
}
