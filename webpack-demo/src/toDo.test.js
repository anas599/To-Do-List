/**
 * @jest-environment jsdom
 */

import { addTask, listData, displayTasks } from "./listFunctions.js";

describe("addTask", () => {
  test('should first', () => { second })("adds a new task to listData", () => {
    const initialLength = listData.length;
    const sampleTask = "Test task";
    addTask(sampleTask);

    expect(listData.length).toBe(initialLength + 1);
    expect(listData[initialLength]).toEqual({
      description: sampleTask,
      completed: false,
      index: initialLength + 1,
    });
  });
});
