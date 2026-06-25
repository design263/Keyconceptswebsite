'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeD0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

function isLocalPath(src) {
  return typeof src === 'string' && src.startsWith('/')
}

export function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false)

  const {
    src,
    alt,
    style,
    className,
    fallback,
    priority = false,
    sizes,
    title,
    width,
    height,
    fill,
    ...rest
  } = props

  const imageTitle = title ?? alt ?? ''
  const imageSrc = didError ? fallback || ERROR_IMG_SRC : src

  if (!imageSrc) return null

  if (!isLocalPath(imageSrc) && didError && !fallback) {
    return (
      <div
        className={`inline-block bg-gray-100 text-left align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-left w-full h-full">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            title={imageTitle}
            {...rest}
            data-original-url={src}
          />
        </div>
      </div>
    )
  }

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt || ''}
        title={imageTitle}
        className={className}
        style={style}
        priority={priority}
        sizes={sizes || '100vw'}
        onError={() => setDidError(true)}
        suppressHydrationWarning
        fill
        {...rest}
      />
    )
  }

  if (width && height) {
    return (
      <Image
        src={imageSrc}
        alt={alt || ''}
        title={imageTitle}
        width={width}
        height={height}
        className={className}
        style={style}
        priority={priority}
        sizes={sizes}
        onError={() => setDidError(true)}
        suppressHydrationWarning
        {...rest}
      />
    )
  }

  return (
    <Image
      src={imageSrc}
      alt={alt || ''}
      title={imageTitle}
      width={1600}
      height={900}
      className={className}
      style={style}
      priority={priority}
      sizes={sizes || '100vw'}
      onError={() => setDidError(true)}
      suppressHydrationWarning
      {...rest}
    />
  )
}
