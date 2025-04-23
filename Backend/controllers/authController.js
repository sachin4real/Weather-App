// === backend/controllers/authController.js ===
import bcrypt from 'bcryptjs';
import supabase from '../utils/supabaseClient.js';

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const { data: existingUser } = await supabase
    .from('users')
    .select()
    .eq('email', email)
    .single();

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.from('users').insert([
    { email, password: hashedPassword }
  ]);

  if (error) return res.status(500).json({ error: 'Registration failed' });

  res.status(201).json({ message: 'User registered' });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const { data: user } = await supabase
    .from('users')
    .select()
    .eq('email', email)
    .single();

  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

  res.json({ message: 'Login successful' });
};