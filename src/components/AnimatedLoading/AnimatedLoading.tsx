import React from 'react'
import cn from 'classnames'

interface AnimatedLoadingProps {
  className?: string
}

const AnimatedLoading: React.FC<AnimatedLoadingProps> = ({ className }) => {
  return (
    <div className={cn('sk-chase', className)}>
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
  )
}

export default AnimatedLoading
