import { get, writable } from 'svelte/store';
import type { Tag } from './tagEntity';

export const tagStore = writable<Array<Tag>>([]);
export const buildTag = (tags: Array<Tag>) =>
  tagStore.set(tags.map((tag) => tag));
export const getTag = () => get(tagStore);
export const addTag = (tag: Tag) => tagStore.update((tags) => [...tags, tag]);
export const removeTag = (targetTag: Tag) =>
  tagStore.update((tags) => tags.filter((tag) => tag.name !== targetTag.name));

export const selectedTagStore = writable<Array<Tag>>([]);
export const buildSelectedTagStore = (tags: Array<Tag>) =>
  selectedTagStore.set(tags.map((tag) => tag));
export const getSelectedTagId = () =>
  get(selectedTagStore).map((tag) => tag.id);
export const addSelectedTag = (tag: Tag) =>
  selectedTagStore.update((tags) => [...tags, tag]);
export const removeSelectedTag = (targetTagName: string) =>
  selectedTagStore.update((tags) =>
    tags.filter((tag) => tag.name !== targetTagName),
  );
export const emptySelectedTagStore = () => selectedTagStore.set([]);
