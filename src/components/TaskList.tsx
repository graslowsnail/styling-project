import {useState} from 'react'
import TaskCell, {type TaskData} from './TaskCell'

const initialTask: TaskData[] = [
  {
    id: 0,
    title: 'Sweep the floors',
    description: 'really do a good job',
    checked: false
  },
  {
    id: 1,
    title: 'Laundry',
    description: 'Wash, dry, fold, and put away clothes and lines.',
    checked: false
  },
  {
    id: 2,
    title: 'Vacuuming',
    description: 'Vacuum carpets, rugs, and floors throughout the house.',
    checked: false
  },
  {
    id: 3,
    title: 'Dusting',
    description: 'Dust furniture, shelves, and other surfaces',
    checked: false
  },
]

function TaskList() {
  const [tasks, setTask] = useState(initialTask)
  console.log('list of task', tasks)

  const toggleTask = (taskId:number):void => {
    setTask((prev) => {
      const newTask = structuredClone(prev)
      const taskToChange = newTask.find((task) => task.id === taskId)
      if (!taskToChange) return newTask
      taskToChange.checked = !taskToChange.checked
      return newTask

    })

  }

  return (
      <div className='w-full flex justify-center font-[inter]'>
    <div className='w-1/2 h-screen mt-5'>
      <div className='text-5xl mb-3'> Task List</div>
      <div className='text-sm mb-3'> Sorted by completion</div>
    <div className='flex flex-col gap-2 items-center justify-center '>
      {tasks.sort((task1, task2) => task1.checked ? -1 : 1).map((task) => <TaskCell taskData={task} toggleChecked={() => toggleTask(task.id)} />)}
    </div>

    </div>
    </div>
  )
}

export default TaskList
