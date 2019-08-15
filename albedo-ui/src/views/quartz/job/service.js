import request from '@/router/axios';
import {isValidateUnique, toStr} from "@/util/validate";

export function pageJob(query) {
  return request({
    url: '/quartz/job/',
    method: 'get',
    params: query
  })
}

export function saveJob(obj) {
  return request({
    url: '/quartz/job/',
    method: 'post',
    data: obj
  })
}

export function findJob(id) {
  return request({
    url: '/quartz/job/' + id,
    method: 'get'
  })
}

export function removeJob(id) {
  return request({
    url: '/quartz/job/' + id,
    method: 'delete'
  })
}

export function runJob(id) {
  return request({
    url: '/quartz/job/run/' + id,
    method: 'post'
  })
}

export function concurrentJob(id) {
  return request({
    url: '/quartz/job/concurrent/' + id,
    method: 'post'
  })
}

export function availableJob(id) {
  return request({
    url: '/quartz/job/available/' + id,
    method: 'post'
  })
}


export function validateUniqueJob(rule, value, callback, id) {
  isValidateUnique(rule, value, callback, '/quartz/job/checkByProperty?id=' + toStr(id))
}
