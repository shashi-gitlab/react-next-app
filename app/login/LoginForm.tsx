"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/Container';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SubText, SubTitle, Title } from '@/components/ui/text';

export default function LoginForm() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [signupMethod, setSignupMethod] = useState<'email' | 'mobile'>('email');
  const [remember, setRemember] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const action = mode === 'signin' ? 'Signed in' : 'Account created';
    setStatusMessage(`${action} successfully. You can update profile details later from your account page.`);
  };

  const activeTabClass = 'border-b-2 border-purple text-purple';
  const inactiveTabClass = 'text-slate-500 hover:text-purple';

  return (
    <Container className="py-16">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr] items-start">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-purple/10 px-4 py-2 text-sm font-semibold text-purple shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-pink" />
            Welcome back to MVCart
          </div>

          <div className="space-y-6">
            <div>
              <Logo className="text-5xl" />
              <Title className="mt-6 text-5xl leading-tight md:text-6xl">Sign in or create your account</Title>
            </div>
            <SubText className="max-w-2xl text-lg text-slate-500">
              Use your email ID or mobile number to access MVCart. Once logged in, update your profile anytime on your account page.
            </SubText>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-purple/10 bg-white p-6 shadow-sm">
              <SubTitle className="mb-3">Fast Checkout</SubTitle>
              <SubText>Save payment preferences so you can complete orders quickly and securely.</SubText>
            </div>
            <div className="rounded-3xl border border-purple/10 bg-white p-6 shadow-sm">
              <SubTitle className="mb-3">Wishlist Access</SubTitle>
              <SubText>Keep your favorite products in one place and pick them up later.</SubText>
            </div>
            <div className="rounded-3xl border border-purple/10 bg-white p-6 shadow-sm">
              <SubTitle className="mb-3">Order Tracking</SubTitle>
              <SubText>Track past and current orders from your account dashboard.</SubText>
            </div>
            <div className="rounded-3xl border border-purple/10 bg-white p-6 shadow-sm">
              <SubTitle className="mb-3">Profile Management</SubTitle>
              <SubText>Update your details later in the profile page.</SubText>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] border border-purple/10 bg-white p-10 shadow-xl shadow-purple/5">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`${mode === 'signin' ? activeTabClass : inactiveTabClass} text-base font-semibold pb-2`}
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`${mode === 'signup' ? activeTabClass : inactiveTabClass} text-base font-semibold pb-2`}
              >
                Create account
              </button>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-purple/70">{mode === 'signin' ? 'Login' : 'Create account'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                {mode === 'signin' ? 'Welcome back' : 'Join MVCart'}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {mode === 'signin'
                  ? 'Enter your account details to continue shopping.'
                  : 'Choose to register with your email address or mobile number.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-slate-700">Full name</label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
              )}

              {mode === 'signup' && (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-700">Sign up method</p>
                  <div className="mt-3 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSignupMethod('email')}
                      className={`rounded-2xl px-4 py-2 text-sm font-semibold ${signupMethod === 'email' ? 'bg-purple text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                    >
                      Email ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setSignupMethod('mobile')}
                      className={`rounded-2xl px-4 py-2 text-sm font-semibold ${signupMethod === 'mobile' ? 'bg-purple text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                    >
                      Mobile no.
                    </button>
                  </div>
                </div>
              )}

              {mode === 'signin' && (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">Login options</p>
                  <p className="mt-2 text-sm text-slate-500">Use your email address to sign in quickly, or use mobile later from your profile.</p>
                </div>
              )}

              {mode === 'signin' ? (
                <>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </>
              ) : signupMethod === 'email' ? (
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-medium text-slate-700">Mobile number</label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {mode === 'signup' && (
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">Confirm password</label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    required
                  />
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {mode === 'signin' ? (
                  <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(event) => setRemember(event.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-purple focus:ring-purple"
                    />
                    Remember me
                  </label>
                ) : (
                  <div className="text-sm text-slate-500">We’ll keep your account information secure.</div>
                )}

                {mode === 'signin' && (
                  <Link href="/contact" className="text-sm font-semibold text-purple hover:text-pink transition-colors">
                    Forgot password?
                  </Link>
                )}
              </div>

              <Button type="submit" className="w-full bg-linear-to-r from-purple to-pink text-white py-4 text-base font-semibold">
                {mode === 'signin' ? 'Sign in securely' : 'Create account'}
              </Button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
              <p className="relative mx-auto inline-block bg-white px-4 text-sm text-slate-500">or continue with</p>
            </div>

            <div className="grid gap-3">
              <Button type="button" variant="outline" className="w-full rounded-full text-slate-700">Continue with Google</Button>
              <Button type="button" variant="outline" className="w-full rounded-full text-slate-700">Continue with Apple</Button>
            </div>

            <p className="text-center text-sm text-slate-500">
              {mode === 'signin'
                ? 'New to MVCart?'
                : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="font-semibold text-purple hover:text-pink"
              >
                {mode === 'signin' ? 'Create account' : 'Sign in'}
              </button>
            </p>

            {statusMessage && (
              <div className="rounded-3xl border border-green-100 bg-green-50 p-4 text-sm text-green-700">
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
