export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
  tier: 'standard' | 'premium' | 'elite';
  kycVerified: boolean;
  createdAt: string;
}
