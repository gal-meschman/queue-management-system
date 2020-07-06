import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

export default () => {
  const queues = useSelector((state) => state);

  const renderQueues = (queue, index) => (
    <tr key={index}>
      <td>{queue.number}</td>
      <td>{queue.name}</td>
      <td>{queue.time}</td>
    </tr>
  );

  return (
    <Table responsive bordered size='sm' className='text-center'>
      <thead>
        <tr>
          <th>Ticket Number</th>
          <th>Customer Name</th>
          <th>Enqueue date and time</th>
        </tr>
      </thead>
      <tbody>{queues.map(renderQueues)}</tbody>
    </Table>
  );
};
