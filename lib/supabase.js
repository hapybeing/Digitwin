import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials in .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Unexpected error:', err)
    return []
  }
}

export const getProjectsByCategory = async (category) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects by category:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Unexpected error:', err)
    return []
  }
}

export const getFeaturedProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching featured projects:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Unexpected error:', err)
    return []
  }
}
