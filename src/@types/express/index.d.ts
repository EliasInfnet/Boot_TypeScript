import * as express from 'express'


// extendendo a interface
declare module 'express' {
  export interface Request{
    user? : string
  }
}