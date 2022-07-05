/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const url = 'http://localhost:3001/';

export default function AddTaskForm({ userId, openAndCloseModelNewTask, getAllUser }) {
  const [newTask, setnewTask] = useState({
    branch: '',
    title: '',
    content: '',
    userId: Number(userId),
  });
  const handletask = ({ target }) => {
    setnewTask((old) => ({ ...old, [target.name]: target.value }));
  };

  const addTask = async () => {
    try {
      const { data } = await axios({
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        data: {
          branch: newTask.branch,
          content: newTask.content,
          title: newTask.title,
          user_id: Number(newTask.userId),
        },
        url: `${url}task`,
      });
      toast.success(`task with title ${data.title} created`);
      openAndCloseModelNewTask(userId);
      await getAllUser();
    } catch (error) {
      toast.error(error.response.data.message);
    }
    // window.location.reload();
  };

  return (
    <form>
      <label htmlFor="branch">
        <span>branch</span>
        <input
          type="text"
          id="branch"
          name="branch"
          onChange={handletask}
        />
      </label>
      <label htmlFor="title">
        <span>title</span>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handletask}
        />
      </label>
      <label htmlFor="content">
        <span>content</span>
        <input
          type="text"
          id="content"
          name="content"
          onChange={handletask}
        />
      </label>
      <button type="button" onClick={addTask}>new Task</button>
    </form>
  );
}
