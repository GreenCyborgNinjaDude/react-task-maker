import { useState } from 'react'
import React from 'react'

const AddForm = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Name of the new event...'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Date & Time of the new event...'
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder ?</label>
        <input
          type='checkbox'
          value={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  )
}

export default AddForm

//https://www.youtube.com/watch?v=w7ejDZ8SWv8 at 1:08:38
