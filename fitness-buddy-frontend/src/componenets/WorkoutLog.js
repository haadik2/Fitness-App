import React, { useState } from 'react';
import './WorkoutLog.css';

function WorkoutLog() {
  const [workouts, setWorkouts] = useState([
    { day: 'Monday', cardio: '30 mins', strength: 'Upper Body' },
    { day: 'Tuesday', cardio: 'Yoga: 45 mins', strength: 'Core Strength' },
    { day: 'Wednesday', cardio: 'Rest Day', strength: '' },
    { day: 'Thursday', cardio: 'HIIT: 20 mins', strength: 'Lower Body' },
    { day: 'Friday', cardio: 'Cardio: 30 mins', strength: 'Flexibility Training' },
  ]);

  const [newWorkout, setNewWorkout] = useState({ day: '', cardio: '', strength: '' });

  const handleEdit = (index, field, value) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index][field] = value;
    setWorkouts(updatedWorkouts);
  };

  const handleAddWorkout = () => {
    if (newWorkout.day && (newWorkout.cardio || newWorkout.strength)) {
      setWorkouts([...workouts, newWorkout]);
      setNewWorkout({ day: '', cardio: '', strength: '' });
    }
  };

  const handleDeleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="workout-log-container">
      <h1 className="workout-log-title">Your Workout Log</h1>
      <div className="workout-log-entries">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-entry">
            <h3>{workout.day}</h3>
            <input
              type="text"
              value={workout.cardio}
              onChange={(e) => handleEdit(index, 'cardio', e.target.value)}
              className="workout-input"
            />
            <input
              type="text"
              value={workout.strength}
              onChange={(e) => handleEdit(index, 'strength', e.target.value)}
              className="workout-input"
            />
            <button onClick={() => handleDeleteWorkout(index)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
      <div className="add-workout">
        <h3>Add New Workout</h3>
        <input
          type="text"
          placeholder="Day"
          value={newWorkout.day}
          onChange={(e) => setNewWorkout({ ...newWorkout, day: e.target.value })}
          className="workout-input"
        />
        <input
          type="text"
          placeholder="Cardio"
          value={newWorkout.cardio}
          onChange={(e) => setNewWorkout({ ...newWorkout, cardio: e.target.value })}
          className="workout-input"
        />
        <input
          type="text"
          placeholder="Strength"
          value={newWorkout.strength}
          onChange={(e) => setNewWorkout({ ...newWorkout, strength: e.target.value })}
          className="workout-input"
        />
        <button onClick={handleAddWorkout} className="add-button">Add Workout</button>
      </div>
    </div>
  );
}

export default WorkoutLog;