/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import AddTaskForm from '../components/AddTaskForm';

const url = 'http://localhost:3001/';
export default function DashBoardAdmin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const openAndCloseModelNewTask = (id) => {
    setUsers((old) => old.map((user) => {
      if (user.id === id) {
        return { ...user, isAddTask: !user.isAddTask };
      }
      return user;
    }));
  };

  const getAllUser = async () => {
    const { data } = await axios.get(`${url}user`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    const allTasks = await Promise.all(data.map((user) => axios.get(`${url}task/${user.id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })));

    const usersWithTasks = data.map((user, i) => ({
      ...user,
      tasks: allTasks[i].data,
      isAddTask: false,
    }));
    setUsers(usersWithTasks);
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${url}task/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      toast.success('task deleted');
      await getAllUser();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/');
    getAllUser();
  }, []);

  return (
    <section>
      {users.map((user) => (
        <section key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.github}</h3>
          <ul>
            {user.tasks.map((task) => (
              <li key={task.id}>
                <h4>{task.title}</h4>
                <p>{task.content}</p>
                <span>{task.status}</span>
                <button type="button" onClick={() => deleteTask(task.id)}>-</button>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => openAndCloseModelNewTask(user.id)}>+</button>
          {user.isAddTask && (
          <AddTaskForm
            openAndCloseModelNewTask={openAndCloseModelNewTask}
            userId={user.id}
            getAllUser={getAllUser}
          />
          )}
        </section>
      ))}
    </section>
  );
}
