'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { HiOutlineEyeOff } from 'react-icons/hi'

import { api, endpoints } from '@/lib/api'

export function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      general: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const res = await api.post(endpoints.LOGIN, values)
        localStorage.setItem('admin_token', res.token)
        localStorage.setItem('admin_user', JSON.stringify(res.admin))
        router.push('/admin/jobs')
      } catch (err) {
        setFieldError('general', err?.message || 'Login failed')
      } finally {
        setSubmitting(false)
      }
    },
  })

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
        <div className="w-full max-w-md bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center relative">
              <div className="w-32 h-32 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <p className="text-muted-foreground text-sm">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-[15%] w-32 h-32 border border-primary/20 rounded-full animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary/40 rounded-full -translate-x-1/2" />
        </div>
        <div className="absolute bottom-40 right-[15%] w-40 h-40 border border-accent/20 rounded-full animate-spin-slow-reverse">
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent/40 rounded-full -translate-x-1/2" />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-60 left-[5%] w-4 h-4 bg-primary/30 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-80 right-[8%] w-3 h-3 bg-accent/30 rounded-full animate-bounce-slow-delayed" />
        <div className="absolute top-1/3 right-[20%] w-5 h-5 bg-primary/20 rounded-full animate-ping-slow" />
        <div className="absolute bottom-1/3 left-[20%] w-6 h-6 bg-accent/20 rounded-full animate-pulse-slow" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle"
            style={{
              left: `${(i * 8.33) % 100}%`,
              top: `${(i * 8.33) % 100}%`,
              animationDelay: `${(i * 0.4) + 0.5}s`,
              animationDuration: `${3 + (i * 0.3)}s`,
            }}
          />
        ))}
      </div>

      <form onSubmit={formik.handleSubmit} className="w-full max-w-md relative z-10">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border p-8 space-y-6">
          {/* Logo and Brand Section */}
          <div className="text-center space-y-2">
            <div className="flex justify-center relative">
              <Image
                src="/86d73f4575e82c2f8cca971638d48b77628092fb.png"
                alt="logo"
                height={150}
                width={150}
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Sign in to manage your dashboard
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 mt-2">
            <div className="">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                id="email"
                className={`w-full rounded-lg px-4 py-2 bg-input-background/50 backdrop-blur-sm border text-foreground placeholder:text-xs placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/60 focus:ring-offset-0`}
                placeholder="admin@company.com"
                type="email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div className="">
              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-semibold text-foreground">
                  Password
                </label>

                <div className="relative group">
                  <input
                    id="password"
                    className={`w-full rounded-lg px-4 py-2 bg-input-background/50 backdrop-blur-sm border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/60 transition-all pr-11`}
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                    {...formik.getFieldProps('password')}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                    tabIndex={Number(-1)}
                  >
                    {showPassword ? (
                      <MdOutlineRemoveRedEye className="w-5 h-5" />
                    ) : (
                      <HiOutlineEyeOff className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                )}
              </div>
            </div>

            {formik.errors.general && (
              <p className="text-red-500 text-sm">{formik.errors.general}</p>
            )}

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="mt-2 w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg py-3 font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formik.isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </div>

        {/* Company name footer */}
        <p className="text-center text-xs text-muted-foreground/60 mt-6 animate-fade-in">
          © 2024 Your Company. All rights reserved.
        </p>
      </form>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        
        @keyframes float-slight {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes bounce-slow-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        @keyframes particle {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slight {
          animation: float-slight 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow-delayed {
          animation: bounce-slow-delayed 5s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-particle {
          animation: particle 4s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

export default AdminLoginPage
