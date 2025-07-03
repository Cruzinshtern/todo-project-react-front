import { useEffect, useState } from 'react';
import { useGetTodosQuery } from '../store/todosApi';
import type { DisplayType, Tab } from '../interfaces/todo.interface';
import { useSearchParams } from 'react-router-dom';
import TabPanel from '../features/TabPanel';
import { TODO_DISPLAY_TABS, TODO_LIMIT_OPTIONS, TODO_TABLE_COLUMNS } from '../constants/constants';
import TodoTiles from '../features/todo/TodoTiles';
import TodoTable from '../features/todo/TodoTable';
import type { TableColumn } from '../interfaces/table.interface';
import Paginator from '../components/Paginator';
import Select from '../components/Select';
import type { SelectOption } from '../interfaces/customComponents.interface';

const defaultDisplayType: DisplayType = 'tiles';

export default function TodoListPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [displayType, setDisplayType] = useState(defaultDisplayType);
  const [searchParams, setSearchParams] = useSearchParams();

  const displayTypeArr: Tab[] = TODO_DISPLAY_TABS;
  const todoTableColumns: TableColumn[] = TODO_TABLE_COLUMNS;
  const todoLimitSelector: SelectOption[] = TODO_LIMIT_OPTIONS;

  const { data, error, isLoading, isFetching } = useGetTodosQuery({ page, limit });

  useEffect(() => {
    console.log('todos array:', data?.data);

    if (data?.data?.length === 0 && !isLoading && !isFetching) {
      console.log('todos array is empty.');
    }

    if (error) {
      console.error('Error occured during the loading:', error);
    }
  }, [data, error, isLoading, isFetching]);

  useEffect(() => {
    searchParams.set('view', displayType);
    setSearchParams(searchParams, { replace: true });
  }, [displayType, searchParams, setSearchParams]);

  const todos = data?.data;
  const totalPages = data?.data ? Math.ceil(data?.count / limit) : 1;

  return (
    <>
      <div className="flex gap-3 items-center justify-center relative">
        <TabPanel
          tabs={displayTypeArr}
          activeTab={displayType}
          onTabChange={(key) => setDisplayType(key as DisplayType)}
          label="Display type"
        />
        <Select
          options={todoLimitSelector}
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          label="Items per page"
          selectClassName="absolute right-4"
        ></Select>
      </div>

      <div className="h-[85vh] flex flex-col justify-between">
        <div className="p-4">
          {displayType === 'tiles' && <TodoTiles todos={todos} />}
          {displayType === 'table' && (
            <TodoTable
              todos={todos}
              columns={todoTableColumns}
              tableClass="w-full"
              showActions={true}
            />
          )}
        </div>
        <Paginator
          currentPage={page}
          totalPages={totalPages}
          isLoading={false}
          onPageChange={(e: any) => setPage(e)}
        ></Paginator>
      </div>
    </>
  );
}
