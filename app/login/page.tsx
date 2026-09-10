"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthStatus() {
  const { data: session, status } = useSession();

  // 加载中状态
  if (status === "loading") {
    return <div>加载中...</div>;
  }

  // 已登录状态：展示个人信息和登出按钮
  if (session) {
    return (
      <div className="p-6 space-y-4">
        <p>
          欢迎回来，<strong>{session.user?.name}</strong> ({session.user?.email})
        </p>
        {session.user?.image && (
          <img
            src={session.user.image}
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        )}
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          退出登录
        </button>
      </div>
    );
  }

  // 未登录状态：展示 Google / GitLab 登录按钮
  return (
    <div className="p-6 space-y-4 max-w-sm mx-auto flex flex-col">
      <h2 className="text-xl font-bold">请选择登录方式</h2>
      
      {/* Google 登录 */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
      >
        <span>使用 Google 账号登录</span>
      </button>

      {/* Github 登录 */}
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 transition"
      >
        <span>使用 Github 账号登录</span>
      </button>
    </div>
  );
}