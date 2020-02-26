import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'

test('shortenTest should not alter a string aleast more than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenTest should cut off more character', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly coutn', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachment should correctly ', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachment remove', () => {
    const post = attachUserName(users, posts)
    const deletePost = post[5]
    expect(post).not.toContainEqual(deletePost)
})