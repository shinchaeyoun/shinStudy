function addList () {
    let txtCheck = inputVal.replace(/\s/g,'').length;
    
    if(txtCheck !== 0) {
      let copyList = [...todoList];
      copyList.unshift(inputVal);
      setTodolist(copyList);
      setInputVal('');
    }
  };
