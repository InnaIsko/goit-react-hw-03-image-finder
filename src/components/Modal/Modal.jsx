export function Modal({ url, tags, hidden }) {
  console.log(hidden);
  const classNames = ['overlay'];
  if (!hidden) {
    classNames.push('is-hidden');
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="modal">
        <img src="url" alt="tags" />
      </div>
    </div>
  );
}
