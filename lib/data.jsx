import { headers } from "next/headers";
import axios from "axios";
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost")
    ? DOMAIN
    : referrer.replace("www.", "");
  return domainName;
}

export async function getData() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1+`&domain=${domain}`
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getScript(url) {
    try {
      const res = await axios.get(url);
      return res.data.data.content;
    } catch (e) {
      console.log("error getScript", e);
      return { error: "error getScript" };
    }
  }

export async function getStatus() {
    const domain = getDomain();
    const url = process.env.STATUS_INFO+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getTeam() {
    const domain = getDomain();
    const url = process.env.GET_TEAM+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}


export async function getBrandChallenges() {
    const domain = getDomain();
    const url = process.env.GET_BRAND_CHALLENGES+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getEserviceCats() {
    const domain = getDomain();
    const url = process.env.GET_ESERVICES_CATEGORIES+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getTaskByStatus(status) {
    const domain = getDomain();
    const url = process.env.GET_TASK_BY_STATUS+`&domain=${domain}&status=${status}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getContributors() {
    const domain = getDomain();
    const url = process.env.GET_CONTRIBUTORS+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}


export async function getChallenges() {
    const domain = getDomain();
    const url = process.env.GET_CHALLENGES+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getPeople() {
    const domain = getDomain();
    const url = process.env.GET_PEOPLE+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getFeaturedTasks() {
    const domain = getDomain();
    const url = process.env.GET_FEAUTRED_TASKS+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getPartners() {
    const domain = getDomain();
    const url = process.env.GET_PARTNERS+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getBrandEarnings() {
    const domain = getDomain();
    const url = process.env.GET_BRAND_EARNINGS+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getAnalytics() {
    const domain = getDomain();
    const url = process.env.GET_BRAND_ANALYTICS+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getBrandChart() {
    const domain = getDomain();
    const url = process.env.GET_BRAND_CHART+`&domain=${domain}`
    const res = await fetch(url);
    if (!res.ok){
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}