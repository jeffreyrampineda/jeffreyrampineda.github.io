import React from "react"

const SkillBars = _ => {
  return (
    <div className="content" style={{ float: "right" }}>
      <ul>
        <li>
          <p class="skill-label">HTML</p>
          <div class="progress">
            <div class="progress-value" style={{ width: "80%" }}></div>
          </div>
        </li>
        <li>
          <p class="skill-label">CSS</p>
          <div class="progress">
            <div class="progress-value" style={{ width: "75%" }}></div>
          </div>
        </li>
        <li>
          <p class="skill-label">JS</p>
          <div class="progress">
            <div class="progress-value" style={{ width: "95%" }}></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SkillBars
