import './statistics.css';

const Statistics = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col statistics-container">
        <div className="text-center mb-5">
          <h2 className="text-4xl	font-bold">Over 10000+ Working Experience</h2>
          <p className="text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="stats-exp-container text-center">
          <div className="">
            <div className="text-4xl font-bold">2500+</div>
            <div className="text-xl font-medium">Satisfied Patients</div>
          </div>
          <div className="ThreeColCenteredStatsPrimaryBackground__Stat-sc-1xbhfj5-6 cvFvtC">
            <div className="text-4xl font-bold">6852</div>
            <div className="text-xl font-medium">Therapy Exercises</div>
          </div>
          <div className="ThreeColCenteredStatsPrimaryBackground__Stat-sc-1xbhfj5-6 cvFvtC">
            <div className="text-4xl font-bold">3+</div>
            <div className="text-xl font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
