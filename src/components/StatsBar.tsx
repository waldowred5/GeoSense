export const StatsBar = () => {
  return (
    <div className="flex justify-around border-b-4 border-accent p-4">
      <h3 className="font-semibold">MIN: {'--'}</h3>
      <h3 className="font-semibold">MAX: {'--'}</h3>
      <h3 className="font-semibold">MEAN: {'--'}</h3>
    </div>
  );
}
