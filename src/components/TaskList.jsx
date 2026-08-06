import React from 'react'
import moment from 'moment'
import _ from 'lodash'

export default function TaskList({ tasks, onDelete, onToggle }) {
  const sorted = _.sortBy(tasks, 'date')
  return (
    <div>
      {sorted.map((t, i) => (
        <div key={i} className={'task ' + (t.done ? 'done' : '')} onClick={() => onToggle(i)}>
          <span dangerouslySetInnerHTML={{ __html: t.title }}></span>
          <small> - {moment(t.date).fromNow()}</small>
          <button className="btn btn-red" onClick={() => onDelete(t.id)}>X</button>
        </div>
      ))}
    </div>
  )
}
