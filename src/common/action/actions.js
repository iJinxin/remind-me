import { testType } from '../constants/actionTypes';

export function testAction(text) {
  return {
    type: testType.type,
    text
  };
}
