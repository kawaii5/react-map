import React from "react";
import { mount } from "enzyme";
import AppDrawerNavItem from "../AppDrawerNavItem";

describe("AppDrawerNavItem renders depth 0", () => {
  let props;
  let mountedDrawerNav;
  const appDrawerNavItem = () => {
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
    const listItem = appDrawerNavItem().find("ListItem");
    expect(listItems.length).toBeGreaterThan(0);
  });

});

describe("AppDrawerNavItem renders", () => {
  let props;
  let mountedDrawerNav;
  const appDrawerNavItem = () => {
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
      isActiveNotif: "1",
    };
    mountedDrawerNav = undefined;
  });
  
  // All tests will go here
  it("always rendered a ListItem", () => {
    const listItem = appDrawerNavItem().find("ListItem");
    expect(listItems.length).toBeGreaterThan(0);
  });

});
