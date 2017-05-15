import * as types from './actionTypes';
import * as urls from './api';
import axios from "axios";

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return function (dispatch) {
        return axios.get(`${urls.COURSES}`)
            .then(courses => { dispatch(loadCoursesSuccess(courses.data)); })
            .catch(error => { throw (error); });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        //.then(savedCourse => { dispatch(createCourseSuccess(savedCourse));
        return axios.put(`${urls.COURSES}/${course.id}`, course)
            .then(course => { dispatch(updateCourseSuccess(course.data)); })
            .catch(error => { throw (error); });
    };
}