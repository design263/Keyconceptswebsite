import { api, endpoints } from '@/lib/api'

export async function submitJobApplication({
  jobId,
  fullName,
  email,
  phone,
  coverLetter,
  resumeFile,
}) {
  if (!jobId) {
    throw new Error('Please select a job to apply for.')
  }

  if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !coverLetter?.trim()) {
    throw new Error('Please fill in all required fields.')
  }

  if (!resumeFile) {
    throw new Error('Resume file is required.')
  }

  const formData = new FormData()
  formData.append('jobId', String(jobId))
  formData.append('fullName', fullName.trim())
  formData.append('email', email.trim())
  formData.append('phone', phone.trim())
  formData.append('coverLetter', coverLetter.trim())
  formData.append('resume', resumeFile)

  return api.post(endpoints.APPLICATIONS, formData)
}

export function validateResumeFile(file) {
  if (!file) return 'Please upload your resume.'

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]

  if (!allowedTypes.includes(file.type)) {
    return 'Only PDF, DOC and DOCX files are allowed.'
  }

  if (file.size > 5 * 1024 * 1024) {
    return 'File size must be less than 5MB.'
  }

  return null
}
