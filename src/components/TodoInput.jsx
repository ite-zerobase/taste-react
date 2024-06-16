function TodoInput() {
  // 과제 2.1 newTodoText state를 알맞은 초기값과 함께 정의해 주세요.

  function addTodo() {
    /* 과제 2.3 addTodo 함수를 구현해보세요.
       addTodo는 사용자가 화면에 입력한 내용을 바탕으로 todo 객체를 만들어 todos를 업데이트하는 함수입니다.
       - todo 객체는 id, text, checked 속성을 가지고 있습니다.
       - id는 todo 객체의 고유값으로 Date.now()로 생성합니다.
       - checked의 기본값은 false 입니다.
    */
  }
  return (
    <div className="todo-input">
      {/* 과제 2.2 input 요소를 newTodoText와 연동해보세요. */}
      <input placeholder="할 일을 입력해보세요" />
      {/* 과제 2.3 button 요소를 클릭하면 addTodo 함수가 실행되도록 연동해보세요 */}
      <button>저장</button>
    </div>
  );
}

export default TodoInput;
