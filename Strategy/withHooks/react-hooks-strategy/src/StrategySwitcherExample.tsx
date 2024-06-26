import React, { useState } from 'react'
import { StrategyProvider } from './strategy/StrategyProvider'
import { PostList } from './PostList'
import { fetchStrategy } from './strategy/fetchStrategy'
import { mockStrategy } from './strategy/mockStrategy'
import { nicoStrategy } from './strategy/nicoStrategy'

// Demonstrates the ability to change the current strategy implementation at runtime.
export const StrategySwitcherExample = () => {
  const [impl, setImpl] = useState(fetchStrategy)

  return (
    <>
      <h1>Strategy Pattern with React Hooks</h1>
      <button onClick={() => setImpl(fetchStrategy)}>use fetch strategy</button>
      <button onClick={() => setImpl(mockStrategy)}>use mock strategy</button>
      <button onClick={() => setImpl(nicoStrategy)}>use Nico strategy</button>
      <StrategyProvider implementation={impl}>
        <PostList />
      </StrategyProvider>
    </>
  )
}
