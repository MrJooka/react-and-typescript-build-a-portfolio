const EventComponent: React.FC = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  };

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
