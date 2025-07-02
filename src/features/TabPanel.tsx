import type { Tab, TabPanelInputProps } from '../interfaces/todo.interface';

export default function TabPanel({ tabs, activeTab, onTabChange, label }: TabPanelInputProps) {
  return (
    <div className="flex gap-4 p-4 justify-center">
      {label && <span>{label}: </span>}
      <div className="flex gap-3">
        {tabs.map((tab: Tab) => (
          <span
            key={tab.key}
            className={`cursor-pointer
                ${activeTab !== tab.key ? 'hover:border-b-2 border-gray-200 pb-1' : ''}
                ${activeTab === tab.key ? 'border-b-2 border-black-200 pb-1' : ''} `}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.value}
          </span>
        ))}
      </div>
    </div>
  );
}
