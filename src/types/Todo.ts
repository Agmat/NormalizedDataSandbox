import { EntityId } from '@reduxjs/toolkit';

export interface Todo {
  id: EntityId;
  task: string;
  done: boolean;
}
