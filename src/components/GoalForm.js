import React, { useState } from "react";

const GoalForm = ({setAllGoals, allGoals}) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });

    const onGoalChange = (e) => {
      setFormData({...formData, goal:e.target.value})
    }
    const onByChange = (e) => {
      setFormData({...formData, by:e.target.value})
    }

    const onBtnClick = (e) => {
      e.preventDefault();
      setAllGoals([...allGoals, formData])
      setFormData({goal:"", by:""})
    }


  
    return (
      <>
        <h1>My Goals</h1>
        <form>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal} 
            onChange={onGoalChange} 
          />
          <input 
            type="text"
            name="by"
            placeholder='By...' 
            value={formData.by} 
            onChange={onByChange} 
          />
          <button onClick={onBtnClick}>Add</button>
        </form>
      </>
    )
}

export default GoalForm;