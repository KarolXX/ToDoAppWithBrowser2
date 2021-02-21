import React from 'react';

const History = ({ tasksList }) => {
  const displayHistory = () => {
    return tasksList.map((task) => {
      if (task.active === false)
        return (
          <>
            <hr style={{ width: "100%", margin: "0" }} />
            <li key={task.id} className="historyElement historyElement--removed" >
              <div>
                <h2>{task.content}</h2>
                <h3>{task.removeDate}</h3>
              </div>
            </li>
          </>
        )
    })
  }

  return (
    <section className="history" id="history">
      <h1 style={{ color: "white", marginLeft: "10px" }}>History</h1>
      <ul className="listHistoryWrapper">{displayHistory()}</ul>
    </section>
  )
}
export default History