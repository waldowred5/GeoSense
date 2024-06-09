export const Observations = () => {
  // const selectedSensorObservationsLink = useSensor(state => state.selectedSensorObservationsLink);
  // const observations = useGetObservationsBySensor(selectedSensorObservationsLink);

  // if (observations.error) {
  //   console.error('Error loading observations:', observations.error);
  //   // TODO: Display error message to user and add retry button
  // }
  //
  // if (observations.loading) {
  //   return (
  //     <div>
  //       <h1>Observations</h1>
  //       <p>Observations Loading...</p>
  //     </div>
  //   )
  // }

  // if (!observations.loading && observations.data?.length === 0) {
  //   return (
  //     <div>
  //       <h1>Observations</h1>
  //       <p>No observations found</p>
  //     </div>
  //   )
  // }

  return (
    <div>
      <h1>Observations</h1>
      {/*{*/}
      {/*  selectedSensorObservationsLink && observations.data*/}
      {/*    ? observations.data.map((observation: any) => (*/}
      {/*      <div key={observation['@iot.id']}>*/}
      {/*        <p>{observation['@iot.id']}</p>*/}
      {/*        <p>{observation.result}</p>*/}
      {/*      </div>*/}
      {/*    ))*/}
      {/*    : <p>No observations found</p>*/}
      {/*}*/}
    </div>
  );
};
