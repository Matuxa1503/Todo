import type { FC } from 'react';
import { NotebookPen } from 'lucide-react';
import './Header.scss';

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="blockTitle">
        <NotebookPen color="#6969d4" width={40} height={40} />
        <h1 className="title">Todo Tasks</h1>
      </div>
    </div>
  );
};
