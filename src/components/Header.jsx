/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from "../assets/logo-mobile.svg";
import iconDown from "../assets/icon-chevron-down.svg";
import iconUp from "../assets/icon-chevron-up.svg";
import elipsis from "../assets/icon-vertical-ellipsis.svg";
import HeaderDropdown from './HeaderDropdown';
import AddEditBoardModal from '../modals/AddEditBoardModal';
import AddEditTaskModal from '../modals/AddEditTaskModal';
import { useDispatch, useSelector } from 'react-redux';
import ElipsisMenu from './ElipsisMenu';
import DeleteModal from '../modals/DeleteModal';
import boardSlice from '../redux/boardsSlice';

function Header({ boardModalOpen, setBoardModalOpen }) {
     const dispatch = useDispatch();
     const [openDropdown, setOpenDropdown] = useState(false);
     const [newTask, setNewTask] = useState("");
     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
     const [openAddEditTask, setOpenAddEditTask] = useState(false);
     const [isElipsisOpen, setIsElipsisOpen] = useState(false)
     const [boardType, setBoardType] = useState("add");
     const boards = useSelector((state) => state.boards);
     const board = boards.find(board => board.isActive);

     const setOpenEditModal = () => {
          setBoardModalOpen(true)
          setIsElipsisOpen(false)
     }
     const setOpenDeleteModal = () => {
          setIsDeleteModalOpen(true)
          setIsElipsisOpen(false)
     }
     const onDeleteBtnClick = (e) => {
          if (e.target.textContent === "Delete") {
               dispatch(boardSlice.actions.deleteBoard());
               dispatch(boardSlice.actions.setBoardActive({ index: 0 }));
               setIsDeleteModalOpen(false);
          } else {
               setIsDeleteModalOpen(false);
          }
     };
     const onDropdownClick = () => {
          setOpenDropdown(state => !state);
          setIsElipsisOpen(false);
          setBoardType("add");
     }
     const onSubmitNewTask = (e) => {
          setNewTask(e.target.value);
          setOpenAddEditTask(true)
     }
     return (
          <div className="p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0">
               <header className="flex justify-between dark:text-white items-center">
                    <div className="flex items-center space-x-2 md:space-x-4">
                         <img src={logo} alt="logo" className="h-6 w-6" />
                         <h3 className="hidden md:inline-block font-bold font-sans md:text-4xl">To-Do</h3>
                         <div className="flex items-center flex-row w-fit gap-4">
                              <h3 className="truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans">{board.name}</h3>
                              <div className="text">
                                   <input type="text" name="" className="p-2 text-gray-900 bg-white border-2 border-[#635fc7] rounded-md dark:bg-[#2b2c37] dark:text-white" placeholder="add new task"
                                        onClick={(e) => { onSubmitNewTask() }} />
                              </div>
                              <img src={openDropdown ? iconUp : iconDown} alt="dropdown icon" className="w-3 ml-2 cursor-pointer md:hidden" onClick={onDropdownClick} />
                         </div>
                    </div>
                    <div className="flex space-x-4 items-center md:space-x-6">
                         <button className="hidden md:block button" onClick={() => { setOpenAddEditTask(state => !state) }}>+ Add New Task</button>
                         <button className="button py-1 px-3 md:hidden" onClick={() => { setOpenAddEditTask(state => !state) }}>+</button>
                         <img src={elipsis} alt="elipsis" className="cursor-pointer h-6" onClick={() => { setBoardType("edit"); setOpenDropdown(false); setIsElipsisOpen(state => !state); }} />
                         {isElipsisOpen && <ElipsisMenu setOpenDeleteModal={setOpenDeleteModal} setOpenEditModal={setOpenEditModal} type="Boards" />}
                    </div>
               </header>
               {openDropdown && <HeaderDropdown setBoardModalOpen={setBoardModalOpen} setOpenDropdown={setOpenDropdown} />}
               {boardModalOpen && <AddEditBoardModal type={boardType} setBoardModalOpen={setBoardModalOpen} />}
               {openAddEditTask && <AddEditTaskModal setOpenAddEditTask={setOpenAddEditTask} device="mobile" type="add" />}
               {isDeleteModalOpen && <DeleteModal setIsDeleteModalOpen={setIsDeleteModalOpen} onDeleteBtnClick={onDeleteBtnClick} title={board.name} type="board" />}
          </div >
     );
}

export default Header;