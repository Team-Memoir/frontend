import axios from "./axios";

/**
 * Get page topic cards
 * @param topicId {string} topicId topic id
 */
export function getTopic(topicId: string): Promise<any[]> {
  return axios.get(`/topic/${topicId}`);
}
