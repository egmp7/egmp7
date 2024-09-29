'use client';
import React, { useState } from 'react';
import Form from './Form';
import ConnectSection from './ConnectSection';

export default function Contact() {

  return (
    <div className="flex flex-col my-auto items-center justify-center px-4">
      <div className="dark:bg-slate-700 bg-slate-200 shadow-md rounded-lg p-8 max-w-md w-full">
        <Form/>
        <ConnectSection />
      </div>
    </div>
  );
}

