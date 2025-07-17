import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus, GraduationCap, BookOpen, Star } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

interface Semester {
  id: string;
  name: string;
  courses: Course[];
}

const gradePoints: { [key: string]: number } = {
  'A+': 10, 'A': 9, 'B+': 8, 'B': 7, 'C+': 6, 'C': 5, 'D': 4, 'F': 0
};

export const GPACalculator = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    {
      id: '1',
      name: 'Semester 1',
      courses: []
    }
  ]);

  const addSemester = useCallback(() => {
    const newSemester: Semester = {
      id: Date.now().toString(),
      name: `Semester ${semesters.length + 1}`,
      courses: []
    };
    setSemesters(prev => [...prev, newSemester]);
  }, [semesters.length]);

  const removeSemester = useCallback((semesterId: string) => {
    setSemesters(prev => prev.filter(sem => sem.id !== semesterId));
  }, []);

  const addCourse = useCallback((semesterId: string) => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: '',
      credits: 3,
      grade: 'A'
    };
    setSemesters(prev => prev.map(sem => 
      sem.id === semesterId 
        ? { ...sem, courses: [...sem.courses, newCourse] }
        : sem
    ));
  }, []);

  const removeCourse = useCallback((semesterId: string, courseId: string) => {
    setSemesters(prev => prev.map(sem => 
      sem.id === semesterId
        ? { ...sem, courses: sem.courses.filter(course => course.id !== courseId) }
        : sem
    ));
  }, []);

  const updateCourse = useCallback((semesterId: string, courseId: string, field: keyof Course, value: string | number) => {
    setSemesters(prev => prev.map(sem => 
      sem.id === semesterId
        ? {
            ...sem,
            courses: sem.courses.map(course => 
              course.id === courseId
                ? { ...course, [field]: value }
                : course
            )
          }
        : sem
    ));
  }, []);

  const calculateSGPA = useCallback((semester: Semester) => {
    if (semester.courses.length === 0) return 0;
    
    const totalPoints = semester.courses.reduce((sum, course) => {
      return sum + (gradePoints[course.grade] || 0) * course.credits;
    }, 0);
    
    const totalCredits = semester.courses.reduce((sum, course) => sum + course.credits, 0);
    
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  }, []);

  const calculateCGPA = useCallback(() => {
    const allCourses = semesters.flatMap(sem => sem.courses);
    if (allCourses.length === 0) return 0;
    
    const totalPoints = allCourses.reduce((sum, course) => {
      return sum + (gradePoints[course.grade] || 0) * course.credits;
    }, 0);
    
    const totalCredits = allCourses.reduce((sum, course) => sum + course.credits, 0);
    
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  }, [semesters]);

  return (
    <div className="space-y-8">
      {/* CGPA Display */}
      <div className="text-center">
        <div className="card-whimsical inline-block bounce-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Your CGPA
            </h2>
            <Star className="w-8 h-8 text-primary" />
          </div>
          <div className="text-6xl font-bold text-primary mb-2">
            {calculateCGPA().toFixed(2)}
          </div>
          <p className="text-muted-foreground">Overall Performance</p>
        </div>
      </div>

      {/* Semesters */}
      <div className="space-y-6">
        {semesters.map((semester, index) => (
          <Card key={semester.id} className="card-whimsical bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{semester.name}</h3>
                <div className="bg-gradient-to-r from-secondary to-secondary/70 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">
                    SGPA: {calculateSGPA(semester).toFixed(2)}
                  </span>
                </div>
              </div>
              {semesters.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSemester(semester.id)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Courses */}
            <div className="space-y-4 mb-6">
              {semester.courses.map((course, courseIndex) => (
                <div key={course.id} className="subject-card bounce-in" style={{animationDelay: `${(index * 0.1) + (courseIndex * 0.05)}s`}}>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                    <div className="md:col-span-2">
                      <Label htmlFor={`course-${course.id}`} className="text-sm font-medium mb-1 block">
                        Course Name
                      </Label>
                      <Input
                        id={`course-${course.id}`}
                        value={course.name}
                        onChange={(e) => updateCourse(semester.id, course.id, 'name', e.target.value)}
                        placeholder="e.g., Data Structures"
                        className="rounded-xl"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`credits-${course.id}`} className="text-sm font-medium mb-1 block">
                        Credits
                      </Label>
                      <Input
                        id={`credits-${course.id}`}
                        type="number"
                        min="1"
                        max="10"
                        value={course.credits}
                        onChange={(e) => updateCourse(semester.id, course.id, 'credits', parseInt(e.target.value) || 1)}
                        className="grade-input"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`grade-${course.id}`} className="text-sm font-medium mb-1 block">
                        Grade
                      </Label>
                      <select
                        id={`grade-${course.id}`}
                        value={course.grade}
                        onChange={(e) => updateCourse(semester.id, course.id, 'grade', e.target.value)}
                        className="grade-input"
                      >
                        {Object.keys(gradePoints).map(grade => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCourse(semester.id, course.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Course Button */}
            <Button
              variant="cute"
              onClick={() => addCourse(semester.id)}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              <BookOpen className="w-4 h-4 mr-2" />
              Add Course
            </Button>
          </Card>
        ))}
      </div>

      {/* Add Semester Button */}
      <div className="text-center">
        <Button
          variant="whimsical"
          size="hero"
          onClick={addSemester}
          className="float-animation"
        >
          <Plus className="w-5 h-5 mr-2" />
          <GraduationCap className="w-5 h-5 mr-2" />
          Add New Semester
        </Button>
      </div>
    </div>
  );
};