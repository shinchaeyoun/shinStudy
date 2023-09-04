import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  .h4 {
    margin: 0px;
    color: #343a40;
    font-size: 36px;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    margin-top: 40px;
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
  }
`

function TodoHead () {
  return (
    <TodoHeadBlock>
      <h4>yyyy.mm.dd</h4>
      <div className='day'></div>
      <div className='tasks-left'></div>
    </TodoHeadBlock>
  )
};

export default TodoHead;