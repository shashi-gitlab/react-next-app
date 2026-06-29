"use client";

import { useState } from 'react';
import { Container } from '@/components/Container';
import { PriceFormatter } from '@/components/PriceFormatter';
import { Button } from '@/components/ui/button';
import { SubText, SubTitle, Title } from '@/components/ui/text';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useAppSelector } from '@/app/hooks';

export default function OrdersPage() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const orders = useAppSelector((state) => state.orders.items);
  const currentUser = useAppSelector((state) => state.auth.user);

  const visibleOrders = orders.filter((order) => !currentUser || order.userEmail === currentUser.email);

  return (
    <Container className="py-12">
      <div className="space-y-10">
        <section className="rounded-[32px] bg-linear-to-r from-purple/10 via-white to-pink/10 border border-purple/10 p-10 shadow-sm">
          <Title className="text-4xl text-dark-green">Your Orders</Title>
          <SubText className="mt-4 text-gray-600 max-w-3xl">
            Review your order history, track recent purchases, and open any order for a full breakdown of items, shipping, and payment details.
          </SubText>
        </section>

        {visibleOrders.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-purple/20 bg-white p-10 text-center text-slate-600">
            No orders yet. Start shopping and your completed purchases will appear here.
          </div>
        ) : (
          <div className="grid gap-8">
            {visibleOrders.map((order) => {
              const isOpen = expandedOrder === order.id;
              return (
                <div key={order.id} className="rounded-[32px] border border-purple/10 bg-white p-8 shadow-sm">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.3em] text-purple/80">Order ID</p>
                      <h2 className="text-2xl font-bold text-slate-900">{order.id}</h2>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                        <span>Placed: {order.placedAt}</span>
                        <span className="px-3 py-1 rounded-full bg-purple/10 text-purple">{order.status}</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-right">
                      <p className="text-sm text-slate-500">Total paid</p>
                      <p className="text-3xl font-black text-purple"><PriceFormatter amount={order.total} /></p>
                      <Button
                        type="button"
                        variant="outline"
                        className="inline-flex items-center gap-2"
                        onClick={() => setExpandedOrder(isOpen ? null : order.id)}
                      >
                        {isOpen ? 'Hide details' : 'View details'}
                        {isOpen ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
                      </Button>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
                      <div className="space-y-4">
                        <div className="rounded-3xl bg-purple/5 border border-purple/10 p-6">
                          <SubTitle>Shipping</SubTitle>
                          <SubText>{order.shippingAddress}</SubText>
                        </div>
                        <div className="rounded-3xl bg-purple/5 border border-purple/10 p-6">
                          <SubTitle>Payment</SubTitle>
                          <SubText>{order.payment}</SubText>
                        </div>
                        <div className="rounded-3xl bg-purple/5 border border-purple/10 p-6">
                          <SubTitle>Items ordered</SubTitle>
                          <div className="space-y-3 mt-3">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex justify-between gap-4 rounded-3xl bg-white border border-slate-100 p-4">
                                <div>
                                  <p className="font-semibold text-slate-900">{item.title}</p>
                                  <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-semibold text-slate-900"><PriceFormatter amount={item.price * item.quantity} /></p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6">
                        <SubTitle>Order breakdown</SubTitle>
                        <div className="mt-4 space-y-3 text-sm text-slate-600">
                          <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span><PriceFormatter amount={order.total - order.shipping} /></span>
                          </div>
                          <div className="flex justify-between">
                            <span>Shipping</span>
                            <span><PriceFormatter amount={order.shipping} /></span>
                          </div>
                          <div className="h-px bg-slate-200 my-3" />
                          <div className="flex justify-between text-base font-semibold text-slate-900">
                            <span>Order total</span>
                            <span><PriceFormatter amount={order.total} /></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
}
