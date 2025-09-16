import React, { useState } from 'react';
import './Grades.css';

const Grades = () => {
  // Sample data - in a real app, this would come from an API
  const [gradesData] = useState({
    studentName: "Alex Johnson",
    studentId: "STU-2023-789",
    overallGPA: 3.7,
    semester: "Fall 2023",
    courses: [
      { id: 1, name: "Mathematics", grade: "A", credits: 4, percentage: 94, assignments: [
        { title: "Algebra Test", score: 92, maxScore: 100, weight: 20 },
        { title: "Calculus Project", score: 95, maxScore: 100, weight: 30 },
        { title: "Final Exam", score: 96, maxScore: 100, weight: 50 }
      ]},
      { id: 2, name: "Computer Science", grade: "A-", credits: 3, percentage: 90, assignments: [
        { title: "React Project", score: 88, maxScore: 100, weight: 25 },
        { title: "Algorithms Test", score: 92, maxScore: 100, weight: 25 },
        { title: "Final Project", score: 90, maxScore: 100, weight: 50 }
      ]},
      { id: 3, name: "Literature", grade: "B+", credits: 3, percentage: 88, assignments: [
        { title: "Essay 1", score: 85, maxScore: 100, weight: 30 },
        { title: "Presentation", score: 90, maxScore: 100, weight: 20 },
        { title: "Final Paper", score: 89, maxScore: 100, weight: 50 }
      ]},
      { id: 4, name: "Physics", grade: "A", credits: 4, percentage: 95, assignments: [
        { title: "Lab Report 1", score: 93, maxScore: 100, weight: 15 },
        { title: "Lab Report 2", score: 96, maxScore: 100, weight: 15 },
        { title: "Midterm Exam", score: 94, maxScore: 100, weight: 30 },
        { title: "Final Exam", score: 96, maxScore: 100, weight: 40 }
      ]},
      { id: 5, name: "History", grade: "B", credits: 3, percentage: 85, assignments: [
        { title: "Research Paper", score: 82, maxScore: 100, weight: 40 },
        { title: "Group Project", score: 88, maxScore: 100, weight: 30 },
        { title: "Final Exam", score: 86, maxScore: 100, weight: 30 }
      ]}
    ]
  });

  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourseDetails = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  const getGradeColor = (grade) => {
    switch(grade) {
      case 'A': return '#4caf50';
      case 'A-': return '#8bc34a';
      case 'B+': return '#cddc39';
      case 'B': return '#ffeb3b';
      case 'B-': return '#ffc107';
      case 'C+': return '#ff9800';
      case 'C': return '#ff5722';
      default: return '#f44336';
    }
  };

  return (
    <div className="grades-container">
      <header className="grades-header">
        <h1>Academic Performance</h1>
        <div className="student-info">
          <span>{gradesData.studentName}</span>
          <span>ID: {gradesData.studentId}</span>
          <span>{gradesData.semester}</span>
        </div>
      </header>

      <div className="grades-summary">
        <div className="gpa-card">
          <h3>Overall GPA</h3>
          <div className="gpa-value">{gradesData.overallGPA}</div>
          <div className="gpa-scale">on a 4.0 scale</div>
        </div>
        
        <div className="grades-distribution">
          <h3>Grade Distribution</h3>
          <div className="distribution-bars">
            {gradesData.courses.map(course => (
              <div key={course.id} className="course-bar">
                <div className="course-name">{course.name}</div>
                <div className="bar-container">
                  <div 
                    className="grade-bar" 
                    style={{
                      width: `${course.percentage}%`,
                      backgroundColor: getGradeColor(course.grade)
                    }}
                  ></div>
                </div>
                <div className="course-grade" style={{color: getGradeColor(course.grade)}}>
                  {course.grade} ({course.percentage}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grades-detail">
        <h2>Course Details</h2>
        <div className="courses-list">
          {gradesData.courses.map(course => (
            <div key={course.id} className="course-card">
              <div 
                className="course-header" 
                onClick={() => toggleCourseDetails(course.id)}
              >
                <div className="course-title">
                  <h3>{course.name}</h3>
                  <span className="credits">{course.credits} credits</span>
                </div>
                <div className="course-grade-badge" style={{backgroundColor: getGradeColor(course.grade)}}>
                  {course.grade}
                </div>
                <div className="expand-icon">
                  {expandedCourse === course.id ? '−' : '+'}
                </div>
              </div>
              
              {expandedCourse === course.id && (
                <div className="course-details">
                  <div className="assignments">
                    <h4>Assignments</h4>
                    {course.assignments.map((assignment, index) => (
                      <div key={index} className="assignment">
                        <div className="assignment-info">
                          <span className="assignment-title">{assignment.title}</span>
                          <span className="assignment-score">{assignment.score}/{assignment.maxScore}</span>
                        </div>
                        <div className="assignment-weight">Weight: {assignment.weight}%</div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{
                              width: `${(assignment.score / assignment.maxScore) * 100}%`,
                              backgroundColor: getGradeColor(course.grade)
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="performance-analytics">
        <h2>Performance Analytics</h2>
        <div className="analytics-cards">
          <div className="analytics-card">
            <h4>Highest Grade</h4>
            <div className="analytics-value">
              {Math.max(...gradesData.courses.map(c => c.percentage))}%
            </div>
            <div className="analytics-label">
              in {gradesData.courses.find(c => c.percentage === Math.max(...gradesData.courses.map(c => c.percentage))).name}
            </div>
          </div>
          
          <div className="analytics-card">
            <h4>Average Grade</h4>
            <div className="analytics-value">
              {(gradesData.courses.reduce((sum, course) => sum + course.percentage, 0) / gradesData.courses.length).toFixed(1)}%
            </div>
            <div className="analytics-label">across all courses</div>
          </div>
          
          <div className="analytics-card">
            <h4>Total Credits</h4>
            <div className="analytics-value">
              {gradesData.courses.reduce((sum, course) => sum + course.credits, 0)}
            </div>
            <div className="analytics-label">this semester</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;