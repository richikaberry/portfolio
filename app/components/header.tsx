import React from 'react';
import { Link } from '@remix-run/react';
import { useLocation } from "@remix-run/react"
import { url } from "../utils/utils";
import '../css/header.css';

interface CustomerHeaderProps {
  header: boolean;
}

export function Header({ header }: CustomerHeaderProps) {
  const location = useLocation();
  const bar = header ? " HeaderBar" : "";
  return (
    location.pathname === '/mypage'
    ?
      <header className="HeaderSection" >
        <div className={`HeaderContents ${bar}`} >
          {[
            {
              to: url(`/localhost:5173/`),
              label: "トップページ",
            },
            {
              to: url(`/localhost:5173/career`),
              label: "経歴紹介ページ",
            },
            {
              to: url(`/localhost:5173/school`),
              label: "学歴紹介ページ",
            }
          ].map((link, index) => {
            return (
              <React.Fragment key={index}>
                <Link to={link.to} className="HeaderLink">
                  {link.label}
                </Link>
              </React.Fragment>
            )
          })}
        </div>
      </header>
    :
      location.pathname === '/career'
    ?
      <header className="HeaderSection">
        <div className={`HeaderContents ${bar}`} >
          {[
            {
              to: url(`/localhost:5173/`),
              label: "トップページ",
            },
            {
              to: url(`/localhost:5173/mypage`),
              label: "自己紹介ページ",
            },
            {
              to: url(`/localhost:5173/school`),
              label: "学歴紹介ページ",
            }
          ].map((link, index) => {
            return (
              <React.Fragment key={index}>
                <Link to={link.to} className="HeaderLink">
                  {link.label}
                </Link>
              </React.Fragment>
            )
          })}
        </div>
      </header>
    :
      <header className="HeaderSection">
        <div className={`HeaderContents ${bar}`} >
          {[
            {
              to: url(`/localhost:5173/`),
              label: "トップページ",
            },
            {
              to: url(`/localhost:5173/mypage`),
              label: "自己紹介ページ",
            },
            {
              to: url(`/localhost:5173/career`),
              label: "経歴紹介ページ",
            }
          ].map((link, index) => {
            return (
              <React.Fragment key={index}>
                <Link to={link.to} className="HeaderLink">
                  {link.label}
                </Link>
              </React.Fragment>
            )
          })}
        </div>
      </header>
  );
}