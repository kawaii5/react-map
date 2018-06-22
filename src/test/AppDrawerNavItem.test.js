import React from "react";
import { mount } from "enzyme";
import AppDrawerNavItem from "../AppDrawerNavItem";

describe("AppDrawerNavItem renders depth 0", () => {
  let props;
  let mountedDrawerNav;
  const appDrawerNavItem0 = () => {
    if (!mountedDrawerNav) {
      mountedDrawerNav = mount(
        <AppDrawerNavItem {...props} />
      );
    }
    return mountedDrawerNav;
  }

  beforeEach(() => {
    props = {
      depth: 0,
      title: "a",
    };
    mountedDrawerNav = undefined;
  });
  
  // All tests will go here
  it("always rendered a ListItem", () => {
    const listItem = appDrawerNavItem0().find("ListItem");
    expect(listItem.length).toBeGreaterThan(0);
  });

});

describe("AppDrawerNavItem rendersi depth 1", () => {
  let props;
  let mountedDrawerNav;
  const appDrawerNavItem1 = () => {
    if (!mountedDrawerNav) {
      mountedDrawerNav = mount(
        <AppDrawerNavItem {...props} />
      );
    }
    return mountedDrawerNav;
  }

  beforeEach(() => {
    props = {
      depth: 1,
      title: "a",
      isActiveNotif: 1,
    };
    mountedDrawerNav = undefined;
  });
  
  // All tests will go here
  it("always rendered a ListItem", () => {
    const listItem = appDrawerNavItem1().find("ListItem");
    expect(listItem.length).toBeGreaterThan(0);
  });

  it("always rendered a Button", () => {
    const button = appDrawerNavItem1().find("ListItem").find("Button");
    expect(button.length).toBeGreaterThan(0);
  });

  it("always rendered a Div", () => {
    const div = appDrawerNavItem1().find("ListItem").find("Button").find("div");
    expect(div.length).toBeGreaterThan(0);
  });

  it("always rendered a Div in div", () => {
    const div = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div");
    expect(div.length).toBeGreaterThan(0);
  });

  it("always rendered a svg", () => {
    const svg = appDrawerNavItem1().find("ListItem").find("Button").find("div").find("div").find("svg");
    expect(svg.length).toBeGreaterThan(0);
  });

});

